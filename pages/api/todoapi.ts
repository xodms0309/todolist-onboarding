// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ITodoItem } from "..";
const todo = [
  { id: "1", content: "a", isCompleted: false },
  { id: "2", content: "b", isCompleted: false },
  { id: "3", content: "c", isCompleted: false },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    query: { id, content, isCompleted },
    method,
  } = req;
  switch (method) {
    case "GET":
      return res.status(200).json(todo);
  }
  //return res.json(todo);
}
