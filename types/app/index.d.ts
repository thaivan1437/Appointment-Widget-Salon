type ID = string

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never

type DeepPartial<T> = T extends Function ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

type Optional<T> = { [K in keyof T]?: T[K] }

type EventTargetState<T> = { name: keyof T; value: string }

type Opaque<K, T> = T & { __TYPE__: K }

type AppConfig = DeepPartial<{}>

type PartialAppConfig = DeepPartial<AppConfig>

interface Window {
  initWidget: (document: Document, apId: string) => void
}

declare namespace NodeJS {
  interface Global {
    AppConfig: PartialAppConfig
  }
}
