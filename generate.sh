nx g @nrwl/angular:app desktop --directory static/booking --routing --style scss --prefix web
nx g @nrwl/angular:app mobile --directory static/booking --routing --style scss --prefix app
nx g @nrwl/angular:lib feature-shell --directory static/booking --prefix=booking --style scss --routing --lazy --parentModule=containers/static/booking/mobile/src/app/app.module.ts
nx g @nrwl/angular:lib data-access --directory static/booking --no-interactive


nx g @nrwl/angular:app desktop --directory static/check-in --routing --style scss --prefix web
nx g @nrwl/angular:app mobile --directory static/check-in --routing --style scss --prefix app

nx g @nrwl/angular:lib feature-shell --directory static/check-in --prefix=check-in --style scss --routing --lazy --parentModule=containers/static/check-in/mobile/src/app/app.module.ts
nx g @nrwl/angular:lib data-access --directory static/check-in --no-interactive
nx g @nrwl/angular:lib data-access --directory static/shared --no-interactive
nx g @nrwl/angular:lib feature-seatmap --directory static/shared/seatmap --prefix=seatmap --style scss --routing --parentModule=components/static/check-in/feature-shell/src/lib/static-check-in-feature-shell.module.ts
nx g @nrwl/angular:lib data-access --directory static/shared/seatmap --no-interactive

nx g @nrwl/angular:lib data-access --directory static/shared/customer --no-interactive
nx g @nrwl/angular:lib feature-manage --directory static/shared/customer --prefix=customer --style scss --routing --parentModule=components/static/booking/feature-shell/src/lib/static-booking-feature-shell.module.ts

nx g c feature-shell --project static-booking-feature-shell --flat --style scss

nx g c user-table --project static-shared-customer-feature-manage --export --style scss
nx g c user-form --project static-shared-customer-feature-manage --export --style scss
