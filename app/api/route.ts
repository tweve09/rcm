export async function GET(req: Request, res: Response) {
  const data = {
    name: "Emmanuel Tweve",
    proffesional: "Software Engineer",
    location: "Mbeya, Tanzania",
    age: "25",
  };
  return new Response(JSON.stringify(data));
}
