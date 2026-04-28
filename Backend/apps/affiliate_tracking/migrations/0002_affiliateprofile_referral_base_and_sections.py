from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("affiliate_tracking", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="affiliateprofile",
            name="referral_base",
            field=models.CharField(blank=True, db_index=True, default="", max_length=48),
        ),
        migrations.AlterField(
            model_name="sectionreferral",
            name="section",
            field=models.CharField(
                choices=[
                    ("complete", "Complete Programs Affiliate"),
                    ("single", "Single Program"),
                    ("pawn", "The Pawn"),
                    ("king", "The King"),
                    ("exclusive", "Exclusive Content of Gussy Bahi (Legacy)"),
                ],
                max_length=24,
            ),
        ),
    ]
