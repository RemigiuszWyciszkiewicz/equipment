import { Component, OnInit, Input } from '@angular/core';

import { Item, ItemType } from './data/item';

import { transAnimation } from 'src/animations';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  animations: [transAnimation],
})
export class EquipmentComponent {
  get chests(): Item[] {
    return this.items.filter((value) => value.type === ItemType.CHEST);
  }

  get rewards(): Item[] {
    return this.items.filter((value) => value.type === ItemType.REWARD);
  }

  get rewardsTotalValue(): number {
    return this.rewards.reduce((prev: number, curr: Item) => {
      return prev + curr.value;
    }, 0);
  }

  @Input() items: Item[];

  itemType = ItemType;
  isPreviewOpen = false;
  activeItem: Item;

  changePreviewState(): void {
    this.isPreviewOpen = !this.isPreviewOpen;
  }

  onClosePreview(): void {
    this.isPreviewOpen = false;
  }

  onItemSelection(item: Item): void {
    this.activeItem = item;

    this.isPreviewOpen = true;
  }

  onChestOpen(item: Item): void {
    this.removeChest(item);
    this.addReward(this.selectRandomReward(this.rewards));
    this.isPreviewOpen = false;
  }

  private removeChest(item: Item): void {
    this.items = this.items.filter((value) => {
      return value.id !== item.id;
    });
  }

  private addReward(reward: Item): void {
    this.items.push({ id: uuidv4(), ...reward });
  }

  private selectRandomReward(rewards: Item[]): Item {
    return rewards[Math.floor(Math.random() * rewards.length)];
  }
}
