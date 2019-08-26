import { Component } from '@angular/core';
import {Movie} from './interfaces/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  groteGeldroof: Movie = {
    'title': 'De Buurtpolitie: De Grote Geldroof',
    'image': 'https://cache.ps.yelo.prd.telenet-ops.be/yposter/images/YeloImages/de_buurtpolitie_de_grote_geldroof_2016_bg.jpg',
    // tslint:disable-next-line:max-line-length
    'backdrop': 'https://www.cinenews.be/image/f660x940/q80/mm/benl/movies16921/posters/de-buurtpolitie-de-grote-geldroof.20190201000000.jpg',
    'releaseDate': '2016',
    // tslint:disable-next-line:max-line-length
    'details': 'Bij een brute overval is een replica van een antiek beeld gestolen. Detectives Eric en Brigitte zijn binnen. Tijdens de vlucht vliegt de achterdeur van het busje van de dieven open, het gestolen beeldstuk op straat. Tot grote verrassing van de achtervolgers en de inbrekers is de straat ineens bezaaid met honderden geldbiljetten die gretig worden opgepikt door tientallen omstanders. Het is nu aan de rechercheurs om niet alleen de dieven te pakken, maar ook om het gestolen geld op te halen.'
  };

  deTunnel: Movie = {
    'title': 'De Buurtpolitie: De Tunnel',
    // tslint:disable-next-line:max-line-length
    'image': 'https://images0.persgroep.net/rcs/U-eqhVfvPNTE8hvxavXBdMJChYk/diocontent/120124342/_fitwidth/763?appId=2dc96dd3f167e919913d808324cbfeb2&quality=0.8',
    // tslint:disable-next-line:max-line-length
    'backdrop': 'https://m.media-amazon.com/images/M/MV5BODI0NmRhNDgtOWZjMi00NjZlLWEzN2EtMzk1NTUxNjE4ZDQ5XkEyXkFqcGdeQXVyMjA0Njc4NjI@._V1_UY268_CR3,0,182,268_AL_.jpg',
    'releaseDate': '2018',
    // tslint:disable-next-line:max-line-length
    'details': 'In dit tweede deel van de serie Buurtpolitie wordt de politieregio geconfronteerd met een tnt-overval. Ondertussen voelt een klein dorp \'s nachts aardbevingsachtige trillingen.'
  };
}

