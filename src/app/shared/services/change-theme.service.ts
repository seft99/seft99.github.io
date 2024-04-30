import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light');
  public currentTheme$: Observable<string> = this.currentThemeSubject.asObservable();

  constructor() { }
  setCurrentTheme(theme: string): void {
    this.currentThemeSubject.next(theme);
  }
  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }
}
