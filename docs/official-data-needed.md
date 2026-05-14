# WARSOL Official Data Needed

Date: 2026-05-14  
Purpose: Keep the public website credible by separating source-backed content from items that require company-owned confirmation.

## 1. Brand / CI

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Official logo files | Replace provisional wordmark and favicon with approved CI. | Temporary SVG mark only. |
| CI color guide | Confirm whether navy/cyan palette is acceptable. | Current white B2B palette is a design proposal, not official CI. |
| Korean/English legal name rules | Confirm exact punctuation and spacing. | Uses public DB wording conservatively. |

## 2. Company Facts

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Official address | Public sources include older conflicting address records. | Site uses the Hwaseong Jeongok factory address confirmed by current search results and the requested correction. |
| Business registration / company profile | Confirms legal identity, representative, and registration data. | Public DB facts are marked provisional. |
| Official phone, fax, email | Required before contact copy is final. | Phone/fax shown as public DB contact; email is not invented. |

## 3. Products / TDS

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Product family names | Avoid unsupported grade names. | Product families are platform-level categories. |
| TDS / SDS files | Required for datasheet downloads and performance values. | No unsupported downloads or unsupported values. |
| Test methods and conditions | Prevent misleading performance claims. | Performance claims stay qualitative. |
| Recommended applications | Confirms where each product can be used publicly. | Application matrix is conservative and inquiry-focused. |

## 4. R&D / Evidence

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Official patent list | Confirms ownership, current status, and public wording. | Uses public patent DB records with source links. |
| Research institute documents | Needed before research-center claims are promoted. | Kept out of main site copy. |
| Certification documents | Needed before certification claims appear in marketing copy. | Certification remains ledger-only until official proof. |

## 5. Assets / Case Evidence

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Product photos | Replace abstract technical visuals where inspection matters. | Uses custom CSS/SVG/React visuals, not unsupported stock. |
| Facility/lab photos | Adds credibility if approved. | Homepage uses the public WARSOL 소개자료 company exterior photo; replace with an officially supplied original when available. |
| Customer references / case studies | High-risk public claim requiring approval. | No customer logos or customer names. |

## 6. Contact Backend

| Needed Item | Why It Matters | Current Site Handling |
| --- | --- | --- |
| Inquiry email or CRM endpoint | Required for real form delivery. | Form generates a copy-ready summary only. |
| Spam/security requirements | Needed before enabling live delivery. | `/api/inquiry` returns 503 official-data-needed until a real recipient, privacy policy, and security rules are approved. |
| Routing rules | Determines whether product, R&D, sales, or sample requests go to different people. | Inquiry category is collected for future adapter use. |
