import { Injectable } from '@angular/core';
import { conseilTags } from '../models/conseil-tags';
import { Conseil } from '../models/conseil.model';

@Injectable({
    providedIn: 'root'
})
export class ConseilService {

    private conseils: Conseil[] = [];

    getConseils(): Conseil[] {
        return this.conseils;
    }

    constructor() {
        this.conseils = [
            {
                title: 'Piqûre d\'abeille',
                description: 'Description du conseil 1',
                tag: conseilTags.Piqûre
            },
            {
                title: 'Piqûre de guêpe',
                description: 'Description du conseil 2',
                tag: conseilTags.Piqûre
            },
            {
                title: 'Piqûre de moustique',
                description: 'Description du conseil 2',
                tag: conseilTags.Piqûre
            },
            {
                title: 'Piqûre de frelon',
                description: 'Description du conseil 2',
                tag: conseilTags.Piqûre
            }
        ];
    }
}
