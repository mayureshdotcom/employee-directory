
from sqlalchemy.orm import Session
from repositories.employee_repository import search_employees


def get_employees(db: Session, search: str):

    search = search.strip()

    if not search:
        raise ValueError("Search query cannot be empty")

    return search_employees(db, search)
