"""alerts file id cascade

Revision ID: 52dbf11fb320
Revises: 0d6439d2e79f
Create Date: 2026-10-20 16:47:49.371284

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '52dbf11fb320'
down_revision: Union[str, Sequence[str], None] = '0d6439d2e79f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_constraint('alerts_file_id_fkey', 'alerts', type_='foreignkey')
    op.create_foreign_key(
        'alerts_file_id_fkey',
        'alerts',
        'files',
        ['file_id'],
        ['id'],
        ondelete='CASCADE',
    )


def downgrade() -> None:
    op.drop_constraint('alerts_file_id_fkey', 'alerts', type_='foreignkey')
    op.create_foreign_key(
        'alerts_file_id_fkey',
        'alerts',
        'files',
        ['file_id'],
        ['id'],
    )
