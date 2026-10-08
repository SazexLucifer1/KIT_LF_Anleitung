// =============================================================
//  EINSTELLUNGEN – nur diese Datei musst du anpassen
// =============================================================

// 1) Supabase-Zugang (Supabase → Project Settings → API / API Keys)
//    Solange hier nichts steht, speichert das Tool nur auf dem jeweiligen Handy.
window.CONFIG = {
  SUPABASE_URL: "",        // z. B. "https://abcdefgh.supabase.co"
  SUPABASE_KEY: "",        // der "anon public" bzw. "publishable" Key (NICHT den service_role / secret Key!)

  // 2) Namen der Stationen (Reihenfolge = Nummer im QR-Code-Link, ?s=1 ist die erste)
  STATIONS: [
    "Station 1", "Station 2", "Station 3", "Station 4",
    "Station 5", "Station 6", "Station 7", "Station 8"
  ]
};
