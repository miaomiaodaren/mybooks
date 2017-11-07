import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'delBrPipe' })

export class DelBrPipe implements PipeTransform {
    transform(value: string): string {
        if(!value) return value;
        return value.replace(/<br><br>/g, '</p><p>').replace(/ /g, "");
    }
}
