
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

from database import get_db
from services.employee_service import get_employees

router = APIRouter()


@router.get("/employees")
def search_employee(
    search: str = Query(..., min_length=1, max_length=100),
    db: Session = Depends(get_db)
):

    try:
        employees = get_employees(db, search)

        return [
            {
                "id": emp.id,
                "name": emp.name,
                "email": emp.email,
                "department": emp.department,
                "designation": emp.designation,
                "date_of_joining": emp.date_of_joining
            }
            for emp in employees
        ]

    except ValueError as error:
        raise HTTPException(
            status_code=422,
            detail=str(error)
        )

    except SQLAlchemyError:
        raise HTTPException(
            status_code=503,
            detail="Unable to access employee database"
        )
