
from sqlalchemy import Column, Integer, String, Date, Index
from database import Base


class Employee(Base):

    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    department = Column(String(100), nullable=False)
    designation = Column(String(100), nullable=False)
    date_of_joining = Column(Date, nullable=False)

    __table_args__ = (
        Index("idx_employee_name", "name"),
        Index("idx_employee_department", "department"),
    )
