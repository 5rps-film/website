PNPM ?= pnpm
BRANCH ?= main

.PHONY: install dev build deploy

install:
	$(PNPM) install

dev:
	$(PNPM) run dev

build:
	$(PNPM) run build

deploy: build
	git push origin $(BRANCH)
	@echo "Vercel will pick up deployments from branch $(BRANCH)."
