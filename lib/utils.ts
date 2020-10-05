export type StringOrUndefined = string | undefined;

export function makeClassName(classNames: Array<StringOrUndefined>): string {
    return classNames.reduce((result: string, className?: string) => {
        return !!className ? `${result} ${className}` : result;
    }, '').trim();
}
