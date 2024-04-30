import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SPAComponent } from './pages/components/spa/spa.component';
import { ImportsMaterialModule } from './shared/imports-material/imports-material/imports-material.module';
import { ToolbarComponent } from './pages/components/toolbar/toolbar.component';
import { ThemeService } from './shared/services/change-theme.service';
import { ExperienceComponent } from './pages/components/sections/experience/experience.component';
import { ProjectsComponent } from './pages/components/sections/projects/projects.component';
import { FrontPageComponent } from './pages/components/sections/front-page/front-page.component';
import { AboutMeComponent } from './pages/components/sections/about-me/about-me.component';
import { SkillsComponent } from './pages/components/sections/skills/skills.component';
import { SeparatorComponent } from './pages/components/separator/separator.component';
import { StudiesComponent } from './pages/components/sections/studies/studies.component';
import { FooterComponent } from './pages/components/sections/footer/footer.component';

@NgModule({
  declarations: [AppComponent, SPAComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportsMaterialModule,
    ToolbarComponent,
    ExperienceComponent,
    ProjectsComponent,
    FrontPageComponent,
    AboutMeComponent,
    SkillsComponent,
    SeparatorComponent,
    StudiesComponent,
    FooterComponent
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
