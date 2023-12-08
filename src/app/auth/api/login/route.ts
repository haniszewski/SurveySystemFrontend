const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginUser;
    body.username = body.username || body.email;
    const res = await fetch(`${BACKEND_URL}/api/account/token/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const { access } = (await res.json()) as { access: string };

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${access}; Path=/`);
    headers.append("Set-Cookie", `email=${body.email}; Path=/`);
    headers.append(
      "Set-Cookie",
      `username=${body.username || body.email}; Path=/`,
    );

    console.log(headers);

    return new Response("logged in", { status: 200, headers });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
