import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient, Project} from "@prisma/client";


const prismaClient = new PrismaClient();

function validateProjectId(projectId: any): ValidationError | null {
    if (!projectId) {
        return {
            status: 400,
            message: 'No ProjectID given'
        };
    } else if (Array.isArray(projectId)) {
        return {
            status: 400,
            message: 'More than one projectId given'
        };
    } else if (Number.isNaN(Number(projectId))) {
        return {
            status: 400,
            message: `Not a valid projectId: \'${projectId}\'`
        };
    }
    return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Project | ErrorResponse>) {
    const {projectId} = req.query;

    const validationResult = validateProjectId(projectId);
    if (validationResult !== null) {
        res
            .status(validationResult.status)
            .json({
                error: validationResult.message
            });
    } else {
        const parsedProjectId: number = Number(projectId);
        const project: Project | null = await prismaClient.project.findFirst({
            where: {
                id: parsedProjectId
            }
        })
        if (project == null) {
            res
                .status(404)
                .json({error: `Project with projectId \'${projectId}\' not found`});
        } else {
            if (req.method === 'GET') {
                res
                    .status(200)
                    .json(project);
            } else if (req.method === 'PUT') {
                const projectUpdateContent: Project = req.body;
                if (projectUpdateContent.id !== parsedProjectId) {
                    res
                        .status(412)
                        .json({
                            error: 'projectIds do not match'
                        })
                } else {
                    const updatedProject = await prismaClient.project.update({
                        where: {
                            id: parsedProjectId
                        },
                        data: projectUpdateContent
                    });

                    res.status(200).json(updatedProject);
                }
            } else if (req.method === 'DELETE') {
                const deletedProject = await prismaClient.project.delete({
                    where: {
                        id: parsedProjectId
                    }
                });
                res
                    .status(200)
                    .json(deletedProject);
            } else {
                res
                    .status(405)
                    .json({
                        error: 'Method not allowed'
                    });
            }

        }
    }
}

