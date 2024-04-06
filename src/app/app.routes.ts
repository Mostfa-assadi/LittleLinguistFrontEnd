import { Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { MatchingGameComponent } from './matching-game-module/matching-game/matching-game.component';
import { InorderedWordsGameComponent } from './inordered-words-game-module/inordered-words-game/inordered-words-game.component';

export const routes: Routes = [
    {path: "", component: DashboardPageComponent},
    {path: "categories-list", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "help", component: HelpPageComponent},
    {path: "choose-category", component: ChooseCategoryComponent},
    {path: "matching-game/:id", component:MatchingGameComponent},
    {path: "inordered-words-game/:id", component:InorderedWordsGameComponent}
];
