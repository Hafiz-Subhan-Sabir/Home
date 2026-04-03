"""Create admin superuser from env (Railway / automated deploy)."""
import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    help = (
        "If DJANGO_SUPERUSER_EMAIL and DJANGO_SUPERUSER_PASSWORD are set, "
        "ensure a superuser exists (username = email). Safe to run on every deploy."
    )

    def handle(self, *args, **options):
        email = (os.environ.get("DJANGO_SUPERUSER_EMAIL") or "").strip().lower()
        password = (os.environ.get("DJANGO_SUPERUSER_PASSWORD") or "").strip()
        if not email or not password:
            self.stdout.write("ensure_superuser: skip (set DJANGO_SUPERUSER_EMAIL and DJANGO_SUPERUSER_PASSWORD)")
            return
        if User.objects.filter(username=email).exists():
            self.stdout.write(f"ensure_superuser: already exists ({email})")
            return
        User.objects.create_superuser(username=email, email=email, password=password)
        self.stdout.write(self.style.SUCCESS(f"ensure_superuser: created {email}"))
