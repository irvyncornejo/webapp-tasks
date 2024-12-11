from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .helpers.infrastructure.EmailService import EmailService

from common.models import Common

class Task(Common):
    status = [
        ('0','Pendiente'),
        ('1','Atrasada'),
        ('2','En proceso'),
        ('3','Esperando revisión'),
        ('4','Aprobada'),
        ('5','Rechazada')
    ]
    title = models.CharField(max_length=150)
    description = models.TextField()
    status = models.CharField(max_length=1, choices=status, default='0')
    # owner = models.ForeignKey(
    #     User,
    #     on_delete=models.CASCADE,
    #     null=False, blank=False,
    #     related_name='owner'
    # )
    # supervisor = models.ForeignKey(
    #     User, on_delete=models.CASCADE,
    #     null=True, blank=True,
    #     related_name='supervisor'
    # )
    email = models.EmailField()
    dead_line = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.description

# @receiver(post_save, sender=Tasks)
# def send_notification_users(instance, created, sender, **kwargs):
#     if created and instance.owner:
#         template_data = {  
#             "owner_name": instance.owner.name,
#             "super_name": instance.supervisor.name,
#             "description": instance.description,
#             "task_link": f"http://localhost:8000/api/tasks/{instance.id}"
#         }
#         EmailService().send_email_with_template(
#             email_receiver=instance.owner.email,
#             template_id=1,
#             template_data=template_data
#         )

# @receiver(post_delete, sender=Tasks)
# def send_notification_users(instance, sender, **kwargs):
#     template_data = {  
#             "description": instance.description,
#         }
#     EmailService().send_email_with_template(
#             email_receiver=instance.owner.email,
#             template_id=2,
#             template_data=template_data
#         )

