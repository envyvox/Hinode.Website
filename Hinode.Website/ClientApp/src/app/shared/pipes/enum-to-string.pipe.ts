import { Pipe, PipeTransform } from '@angular/core';
import {CommandCategory} from '../web.api.service';

@Pipe({
  name: 'commandCategoryLocalize'
})
export class CommandCategoryLocalizePipe implements PipeTransform {

  transform(category: CommandCategory): any {
    switch (category) {
      case CommandCategory.UserInfo:
        return "Информация о пользователе";
      case CommandCategory.UserInfoInteraction:
        return "Управление информацией пользователя";
      case CommandCategory.Achievements:
        return "Достижения";
      case CommandCategory.Collection:
        return "Коллекция";
      case CommandCategory.Cards:
        return "Карточки";
      case CommandCategory.Inventory:
        return "Инвентарь";
      case CommandCategory.Building:
        return "Строительство";
      case CommandCategory.Cooking:
        return "Кулинария";
      case CommandCategory.Registration:
        return "Регистрация";
      case CommandCategory.Training:
        return "Обучение";
      case CommandCategory.WorldInfo:
        return "Информация о мире";
      case CommandCategory.Box:
        return "Коробки";
      case CommandCategory.Rating:
        return "Рейтинг";
      case CommandCategory.Transit:
        return "Перемещения";
      case CommandCategory.Shop:
        return "Магазины";
      case CommandCategory.Referral:
        return "Реферальная система";
      case CommandCategory.Market:
        return "Рынок";
      case CommandCategory.Crafting:
        return "Изготовление";
      case CommandCategory.Field:
        return "Выращивание урожая";
      case CommandCategory.Family:
        return "Семья";
      case CommandCategory.Explore:
        return "Исследования";
      case CommandCategory.Contract:
        return "Рабочие контракты";
      case CommandCategory.Casino:
        return "Казино";
    }
  }

}
