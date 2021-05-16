import {Pipe, PipeTransform} from '@angular/core';
import { Location } from '../web.api.service';

@Pipe({
  name: 'locationLocalize'
})
export class LocationLocalizePipe implements PipeTransform {
  transform(location: Location): any {
    switch (location) {
      case Location.InTransit:
        // изначальное значение в пути, однако таких команд у нас нет
        // поэтому все команды не требующие локации записываются сюда
        return "Любая";
      case Location.Capital:
        return "Столица «Эдо»";
      case Location.Garden:
        return "Цветущий сад «Кайраку-эн»";
      case Location.Seaport:
        return "Портовый город «Нагоя»";
      case Location.Castle:
        return "Древний замок «Химэдзи»";
      case Location.Village:
        return "Деревня «Мура»";
      case Location.ExploreGarden:
        return "Исследование сада";
      case Location.ExploreCastle:
        return "Исследование шахт";
      case Location.Fishing:
        return "Рыбалка";
      case Location.CapitalCasino:
        return "Казино «Коун»";
      case Location.CapitalMarket:
        return "Рынок «Сайсё»";
      case Location.CapitalShop:
        return "Магазины «У Торедо»";
      case Location.FieldWatering:
        return "Поливка участка земли";
      case Location.WorkOnContract:
        return "..";
      case Location.MakingCrafting:
        return "Изготовление предметов";
      case Location.MakingAlcohol:
        return "Изготовление алкоголя";
      case Location.MakingFood:
        return "Приготовление блюда";
      case Location.MakingDrink:
        return "Приготовление напитков";

    }
  }

}
