import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"]
})
export class GithubProfileComponent implements OnInit {
  constructor(
    // private route: ActivatedRoute
    private router: Router
  ) {}

  submit() {
    this.router.navigate(["/followers"], {
      queryParams: { page: 1, order: "newest" }
    });
  }

  ngOnInit() {
    // Takes a snapshot of the route params. This is good if you are sure that the view does not
    // need to update anything after it is initialized.
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // Subscribing to an observable allows Angular to keep one instance of this component up and
    // continually update its data. Without this, the component would be destroyed each time it
    // was navigated away from and re-initialized when navigated back to.
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get("id"));
    // });
  }
}
