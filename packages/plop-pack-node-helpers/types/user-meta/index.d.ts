// https://stackoverflow.com/a/42702089/3484824
// http://blog.wolksoftware.com/contributing-to-definitelytyped

// type userMeta = {
//   [key: string]: string;
// };

// declare module 'user-meta' {
//   // export default userMeta;
//   export default interface userMeta {
//     name: string;
//     email: string;
//     url: string;
//   }
// }

// https://github.com/microsoft/TypeScript/issues/13348#issuecomment-282388407
declare module '*';
