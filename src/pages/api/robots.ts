import * as fs from "fs";

//@ts-ignore
export default function handler(req, res) {
    const robotsTxt = fs.readFileSync('./public/robots.txt', 'utf-8');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robotsTxt);
}