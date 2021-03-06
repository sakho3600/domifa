import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/modules/users/interfaces/user";
import { AuthService } from "src/app/modules/shared/services/auth.service";
import { Usager } from "../../interfaces/usager";
import { UsagerService } from "../../services/usager.service";
import { motifsRadiation } from "../../usagers.labels";
import { Title } from "@angular/platform-browser";
import { MatomoTracker } from "ngx-matomo";

@Component({
  providers: [UsagerService, AuthService],
  selector: "app-raft",
  styleUrls: ["./raft.component.css"],
  templateUrl: "./raft.component.html",
})
export class RaftComponent implements OnInit {
  public usager: Usager;
  public user: User;

  public today: Date;
  public motifsRadiation: any;

  constructor(
    private usagerService: UsagerService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private matomo: MatomoTracker
  ) {
    this.today = new Date();
    this.usager = new Usager();
    this.user = new User();
    this.motifsRadiation = motifsRadiation;
  }

  public ngOnInit() {
    this.titleService.setTitle("Radier un domicilié");
    if (this.route.snapshot.params.id) {
      this.authService.currentUser.subscribe((user) => {
        this.user = user;
      });

      this.usagerService.findOne(this.route.snapshot.params.id).subscribe(
        (usager: Usager) => {
          this.usager = usager;
        },
        (error) => {
          this.router.navigate(["/404"]);
        }
      );
    } else {
      this.router.navigate(["/404"]);
      return;
    }
  }

  public printPage() {
    window.print();
    this.matomo.trackEvent("tests", "impression_courrier_radiation", "null", 1);
  }

  public setDecision(statut: string) {
    this.usagerService
      .setDecision(this.usager.id, this.usager.decision, statut)
      .subscribe((usager: Usager) => {
        this.usager = usager;
      });
  }
}
