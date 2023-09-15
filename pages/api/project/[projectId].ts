import {NextApiRequest, NextApiResponse} from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {projectId} = req.query;

    if (!projectId) {
        res
            .status(400)
            .json({error: 'No ProjectID given'});
    } else {
        res
            .status(200)
            .json({message: 'retrieved projectId ' + projectId});
    }
}
