function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"]
};

const ageAndExtensions = pickObjectKeys(language, ["age", "extensions"]);

type ProgrammingLanguage = {
  name: string;
};

function identity<T>(value: T): T {
  return value;
}

const result = identity<ProgrammingLanguage>({ name: "TypeScript" });

type User = {
  name: string;
  a: "hi";
};

async function fetchApi<ResultType = Record<string, any>>(
  path: string
): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return;
  response.json();
}

const data: User = await fetchApi("/users");

console.log(data.a);

export {};

type IsStringType<T> = T extends string ? true : false;

type A = "abc";
type B = {
  name: string;
};

type ResultA = IsStringType<A>;
type ResultB = IsStringType<B>;
