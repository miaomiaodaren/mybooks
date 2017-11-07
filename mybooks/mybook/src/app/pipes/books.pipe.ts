import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'delHtmlPipe' })

export class DelHtmlPipe implements PipeTransform {
    transform(value: string): string {
        if(!value) return value;
        return value.replace(/<\/?.+?>/g, "").replace(/ /g, "");
    }
}
