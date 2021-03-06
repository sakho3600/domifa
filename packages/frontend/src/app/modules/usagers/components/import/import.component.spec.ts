import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UsagersModule } from "../../usagers.module";
import { ImportComponent } from "./import.component";
import { MatomoInjector, MatomoTracker } from "ngx-matomo";

describe("ImportComponent", () => {
  let fixture: ComponentFixture<ImportComponent>;
  let app: ImportComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [UsagersModule],
      providers: [
        {
          provide: MatomoInjector,
          useValue: {
            init: jest.fn(),
          },
        },
        {
          provide: MatomoTracker,
          useValue: {
            setUserId: jest.fn(),
          },
        },
        { provide: APP_BASE_HREF, useValue: "/" },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(app).toBeTruthy();
  });
});
