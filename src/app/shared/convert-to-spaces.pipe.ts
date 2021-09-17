import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})


export class ConverToSpaces implements PipeTransform {
transform(value: string, charter: string) {
    return value.replace(charter, ' ');
}
}