'use server';

import { ILoginResponse } from '@/types/ILoginResponse';
import { cookies } from 'next/headers';


export async function getSession() {
  const cookiesStore = await cookies();
  const isAuthenticated = cookiesStore.get("isAuthenticated");
  return {
    isAuthenticated: isAuthenticated ? isAuthenticated.value === "true" : false,
  }
}

export async function saveSession(data: ILoginResponse) {
  const cookiesStore = await cookies();
  cookiesStore.set("isAuthenticated", "true", {
    httpOnly: true,
    secure: true,
  });
  cookiesStore.set("ACCESS_TOKEN", data.accessToken, {
    httpOnly: true,
    secure: true,
    expires: new Date(data.accessTokenExpireAt),
  });
  cookiesStore.set("REFRESH_TOKEN", data.refreshToken, {
    httpOnly: true,
    secure: true,
    expires: new Date(data.refreshTokenExpireAt),
  });
  cookiesStore.set("USER", JSON.stringify({
    email: data.email,
    id: data.id,
    name: data.name,
    phoneNumber: data.phoneNumber,
    role: data.role,
  }), { httpOnly: true, secure: true, expires: new Date(data.accessTokenExpireAt), });
}

export async function removeSession() {
  const cookiesStore = await cookies();
  cookiesStore.delete("isAuthenticated");
}

// export async function restoreSession() {
//   const cookiesStore = await cookies();

//   const refreshToken = cookiesStore.get(REFRESH_TOKEN);

//   return {
//     accessToken: cookiesStore.get(ACCESS_TOKEN),
//     refreshToken: refreshToken,
//   };
// }
export async function getJwtExpiration(token: string) {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode the payload
    if (payload.exp) {
      // return payload.exp;
      const expDate = new Date(payload.exp * 1000); // Convert to milliseconds
      console.log(expDate);
      return expDate; // Return as readable format
    }
    return new Date();
}