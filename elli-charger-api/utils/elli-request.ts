import config from '../../config.ts'

export function apiUrl(path: string) {
  return `https://${config.ipAddress}/api/v1/${path}`;
}

export async function elliRequest<T, K>(
  path: string,
  method: string,
  accessToken?: string,
  body?: T
): Promise<K> {
  const url = apiUrl(path);
  const headers = new Headers();

  if (body) {
    headers.append("Content-Type", "application/json");
  }

  if (accessToken) {
    headers.append("Authorization", accessToken);
  }

  console.log(`Elli request: ${method} ${url}`);
  const res = await fetch(apiUrl(path), {
    method,
    headers,
    body: body && JSON.stringify(body),
  });

  if (res.ok) {
    const jsonData = await res.json();
    console.log(`Response:`, jsonData);
    return jsonData;
  }

  const msg = await res.text();

  throw { statusCode: res.status, msg };
}
