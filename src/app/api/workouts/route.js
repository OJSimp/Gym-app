import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req, res) {
  res.status(200).json({ name: "NAME" });
  res.status(200).json({ name: "NAME" });
}
