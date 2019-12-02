import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokeListComponent } from './pages/poke-list/poke-list.component';
import { SearchComponent } from './pages/poke-list/search/search.component';
import { PaginationComponent } from './pages/poke-list/pagination/pagination.component';
import { PokeDetailsComponent } from './pages/poke-details/poke-details.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		PokeListComponent,
		SearchComponent,
		PaginationComponent,
		PokeDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		MatPaginatorModule,
		MatCardModule,
		MatDividerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
