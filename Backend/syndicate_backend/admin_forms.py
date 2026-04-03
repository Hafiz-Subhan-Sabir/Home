"""Admin login: we use email as Django User.username; label the field Email for clarity."""
from django import forms
from django.contrib.admin.forms import AdminAuthenticationForm


class EmailAsUsernameAdminLoginForm(AdminAuthenticationForm):
    username = forms.CharField(
        label="Email",
        widget=forms.TextInput(attrs={"autocomplete": "email", "autofocus": True}),
    )
