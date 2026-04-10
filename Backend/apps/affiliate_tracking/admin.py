from django.contrib import admin

from .models import AffiliateProfile, ApiToken, ClickEvent, EmailOTP, LeadEvent, SaleEvent, SectionReferral


@admin.register(AffiliateProfile)
class AffiliateProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "display_name", "user", "points_total", "earnings_total", "created_at")
    search_fields = ("display_name", "user__email", "user__username")


@admin.register(SectionReferral)
class SectionReferralAdmin(admin.ModelAdmin):
    list_display = ("referral_id", "section", "profile", "created_at")
    search_fields = ("referral_id",)


@admin.register(ClickEvent)
class ClickEventAdmin(admin.ModelAdmin):
    list_display = ("id", "referral", "visitor_id", "created_at")


@admin.register(LeadEvent)
class LeadEventAdmin(admin.ModelAdmin):
    list_display = ("id", "referral", "visitor_id", "email", "created_at")


@admin.register(SaleEvent)
class SaleEventAdmin(admin.ModelAdmin):
    list_display = ("id", "referral", "visitor_id", "email", "amount", "created_at")


@admin.register(ApiToken)
class ApiTokenAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "token", "created_at")


@admin.register(EmailOTP)
class EmailOTPAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "code", "expires_at", "is_used", "created_at")
