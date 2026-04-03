"""
WSGI config for syndicate_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "syndicate_backend.settings")

import django

django.setup()

# Apply Postgres migrations at process start so deploys work even when the shell start
# command is overridden (e.g. Railway custom command). Use gunicorn --preload so this
# runs once in the master before workers fork.
if (os.environ.get("SKIP_WSGI_MIGRATE") or "").strip().lower() not in ("1", "true", "yes"):
    from django.conf import settings
    from django.core.management import call_command

    if settings.DATABASES["default"]["ENGINE"] == "django.db.backends.postgresql":
        call_command("migrate", interactive=False, verbosity=1)

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
