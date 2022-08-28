export function parseElement(str: string, modifier: string, html: string): string {
    return str.replaceAll(' ' + modifier, ' ' + html).replaceAll(modifier + ' ', html.replaceAll('<', '</') + ' ');
}

export function parseHtml(str: string): string {
    str = parseElement(str, '**', '<strong>')
    str = parseElement(str, '*', '<i>')
    str = parseElement(str, '~~', '<del>')
    return str
}