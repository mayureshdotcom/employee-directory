
from sqlalchemy.orm import Session
from sqlalchemy import or_
from models import Employee


def search_employees(db: Session, search: str):

    search_text = search + "%"

    employees = db.query(Employee).filter(
        or_(
            Employee.name.like(search_text),
            Employee.department.like(search_text)
        )
    ).limit(50).all()

    return employees
