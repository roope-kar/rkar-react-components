export function makeClassName(classNames: string[]): string {
    return classNames.reduce((result: string, className: string) => `${result} ${className}`, '');
}
