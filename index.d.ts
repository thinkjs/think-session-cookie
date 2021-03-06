declare class ThinkSessionCookie {
  constructor(options: object, ctx: object, cookieOptions?: object)
  get(name: string): Promise<any>
  set(name: string, value): Promise<any>
  delete(): Promise<any>
}

export = ThinkSessionCookie;