import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient, Project} from "@prisma/client";

type ResponseData = {
    message: string
}

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | Project | Project[]>
) {
    if (req.method === 'POST') {
        const projectToCreate: Project = req.body;

        const project: Project = await prisma.project.create({
            data: projectToCreate
        })

        res
            .status(200)
            .json(project)
    } else if (req.method === 'GET') {
        const projects: Project[] = await prisma.project.findMany();

        res
            .status(200)
            .json(projects);
    } else {
        res
            .status(405)
            .json({
                message: 'Method not allowed'
            })
    }
}
