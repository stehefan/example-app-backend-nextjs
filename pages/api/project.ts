import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient, Project} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project | Project[] | ErrorResponse>
) {
    if (req.method === 'POST') {
        const projectToCreate: Project = req.body;

        const project: Project = await prisma.project.create({
            data: projectToCreate
        });

        res
            .status(200)
            .json(project);
    } else if (req.method === 'GET') {
        const projects: Project[] = await prisma.project.findMany();

        res
            .status(200)
            .json(projects);
    } else {
        res
            .status(405)
            .json({
                error: 'Method not allowed'
            })
    }
}
