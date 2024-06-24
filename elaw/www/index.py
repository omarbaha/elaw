import frappe

from frappe import _

def get_context(context):
    context = {
        "content":getWebContent(),
        "plans":getplans()
    }
    return context


@frappe.whitelist(allow_guest=True)
def getWebContent():
    content = frappe.get_doc('Website Templete Setting')
    return content

@frappe.whitelist(allow_guest=True)
def getplans():
    plans = frappe.db.sql(f"""  select name from `tabSystem plans` """,as_dict=True) 
    content = []
    for plan in plans:
        p = frappe.get_doc("System plans" , plan)
        content.append(p)
    return content
