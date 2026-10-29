# Architecture notes

The monitor uses correlation keys to turn two chain event streams into settled and pending message sets. A production service would persist cursors and attach finality metadata.
