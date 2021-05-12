import { Component, OnInit } from '@angular/core';
import { CommandService, CommandInfo, CommandCategory } from '../shared/web.api.service';
import { SelectItem} from 'primeng/api';
import { EnumEx } from '../shared/enumEx';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  data: CommandInfo[];
  commandCategory = CommandCategory;
  commandCategories: SelectItem[];

  constructor(private _commandService: CommandService) {
    this.commandCategories = EnumEx.getNamesAndValues(CommandCategory);
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this._commandService
      .list()
      .subscribe(x => this.data = x);
  }

  categoryBorderColor(category:CommandCategory): string {
    switch (category) {
      case CommandCategory.UserInfo:
        return "#ff8880";
      case CommandCategory.UserInfoInteraction:
        return "#ffaa80";
      case CommandCategory.Achievements:
        return "#fbff80";
      case CommandCategory.Collection:
        return "#b96fed";
      case CommandCategory.Cards:
        return "#5e63eb";
      case CommandCategory.Inventory:
        return "#8fffab";
      case CommandCategory.Building:
        return "#d19649";
      case CommandCategory.Cooking:
        return "#78c4ff";
      case CommandCategory.Registration:
        return "#ff5959";
      case CommandCategory.Training:
        return "#ed85ff";
      case CommandCategory.WorldInfo:
        return "#ecff73";
      case CommandCategory.Box:
        return "#894dc9";
      case CommandCategory.Rating:
        return "#3f43bf";
      case CommandCategory.Transit:
        return "#417fb5";
      case CommandCategory.Shop:
        return "#b3c940";
      case CommandCategory.Referral:
        return "#f2f1b3";
      case CommandCategory.Market:
        return "#cf8f57";
      case CommandCategory.Crafting:
        return "#79b54e";
      case CommandCategory.Field:
        return "#a8672d";
      case CommandCategory.Family:
        return "#e85678";
      case CommandCategory.Explore:
        return "#5836bf";
      case CommandCategory.Contract:
        return "#3da197";
      case CommandCategory.Casino:
        return "#a0d950";
    }
  }

  Filter(category: CommandCategory) {
    this._commandService
      .categoryList(category)
      .subscribe(x => this.data = x);
  }
}
