import ExpoPasskeysModule from './ExpoPasskeysModule';
import { CreatePasskeyResponse, Error, PasskeyRpInfo, PasskeyUserInfo, SignInWithPasskeyResponse } from './ExpoPasskeys.types';

export async function createAsync(challenge: string, user: PasskeyUserInfo, rp: PasskeyRpInfo, timeout: number): Promise<{ error?: Error, result?: CreatePasskeyResponse }> {
  try {
    const passkeyResult = await ExpoPasskeysModule.createAsync(challenge, user, rp, timeout);

    if (typeof passkeyResult == typeof String)
      return { result: JSON.parse(passkeyResult) as CreatePasskeyResponse };
    else
      return { result: passkeyResult }
  }
  catch (e) {
    return { error: e }
  }
}

export async function signInAsync(challenge: string, user: PasskeyUserInfo, rp: PasskeyRpInfo, timeout: number): Promise<{ error?: Error, result?: SignInWithPasskeyResponse }> {
  try {
    const passkeyResult = await ExpoPasskeysModule.signInAsync(challenge, user, rp, timeout);
    if (typeof passkeyResult == typeof String)
      return { result: JSON.parse(passkeyResult) as SignInWithPasskeyResponse };
    else
      return { result: passkeyResult }
  }
  catch (e) {
    return { error: e }
  }
}

export async function isAutoFillSupported(): Promise<boolean> {
  return await ExpoPasskeysModule.isAutoFillSupportedAsync();
}

export function isSupported(): boolean {
  return ExpoPasskeysModule.isSupported();
}



// ----------------------------------------
// // Get the native constant value.
// export const PI = ExpoPasskeysModule.PI;

// export function hello(): string {
//   return ExpoPasskeysModule.hello();
// }

// export async function setValueAsync(value: string) {
//   return await ExpoPasskeysModule.setValueAsync(value);
// }


// const emitter = new EventEmitter(ExpoPasskeysModule ?? NativeModulesProxy.ExpoPasskeys);
// export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
//   return emitter.addListener<ChangeEventPayload>('onChange', listener);
// }

// export { ChangeEventPayload };
