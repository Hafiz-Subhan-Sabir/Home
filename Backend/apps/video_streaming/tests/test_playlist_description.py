from django.test import SimpleTestCase

from apps.video_streaming.playlist_description import parse_playlist_description_sections


class PlaylistDescriptionSectionsTests(SimpleTestCase):
    def test_parses_three_sections_in_order(self):
        raw = """
The Hook

Grab attention here.

The core protocol

Week by week structure.

What you will learn

- One
- Two
"""
        s = parse_playlist_description_sections(raw)
        self.assertEqual(s["hook"], "Grab attention here.")
        self.assertEqual(s["core_protocol"], "Week by week structure.")
        self.assertIn("One", s["what_you_will_learn"])

    def test_markdown_hash_titles(self):
        raw = "## The Hook\n\nBody A\n\n### What You Will Learn\n\nBody C\n"
        s = parse_playlist_description_sections(raw)
        self.assertEqual(s["hook"], "Body A")
        self.assertEqual(s["what_you_will_learn"], "Body C")

    def test_core_protocol_without_the(self):
        raw = "Core protocol\n\nRuns the system.\n"
        s = parse_playlist_description_sections(raw)
        self.assertEqual(s["core_protocol"], "Runs the system.")

    def test_empty_without_markers(self):
        self.assertEqual(
            parse_playlist_description_sections("Just prose without section headers."),
            {"hook": "", "core_protocol": "", "what_you_will_learn": ""},
        )
