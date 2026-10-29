"""Cifra o descifra la guía del vendedor.
   Cifrar:    python3 tools/guia.py cifrar guia-texto.html CLAVE   -> escribe guia.json
   Descifrar: python3 tools/guia.py descifrar CLAVE > guia-texto.html
   El texto sin cifrar (guia-texto.html) NUNCA se sube al repositorio."""
import sys, os, json, base64
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
IT = 310000
OUT = os.path.join(os.path.dirname(__file__), '..', 'guia.json')
def key(pw, salt): return PBKDF2HMAC(hashes.SHA256(), 32, salt, IT).derive(pw.encode())
b64 = lambda b: base64.b64encode(b).decode()
if sys.argv[1] == 'cifrar':
    txt = open(sys.argv[2], encoding='utf-8').read().encode(); salt, iv = os.urandom(16), os.urandom(12)
    ct = AESGCM(key(sys.argv[3], salt)).encrypt(iv, txt, None)
    json.dump({'it': IT, 'salt': b64(salt), 'iv': b64(iv), 'ct': b64(ct)}, open(OUT, 'w'))
else:
    d = json.load(open(OUT)); ub = base64.b64decode
    print(AESGCM(key(sys.argv[2], ub(d['salt']))).decrypt(ub(d['iv']), ub(d['ct']), None).decode())
